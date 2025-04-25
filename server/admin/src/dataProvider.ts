import { DataProvider, fetchUtils } from "react-admin";
import { stringify } from "query-string";

const apiUrl = "http://localhost:80";

const httpClient = (url: string, options: any = {}) => {
  const token = localStorage.getItem("access_token");

  // Conditionally set Authorization header only if the method is POST, PUT, or DELETE
  const headers = new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
    ...(["POST", "PUT", "DELETE"].includes(options.method) &&
      token && { Authorization: `Bearer ${token}` }), // Add Authorization header if required
    ...options.headers, // Spread in any additional headers
  });

  return fetchUtils.fetchJson(url, { ...options, headers });
};

export const dataProvider: DataProvider = {
  getList: async (resource, params) => {
    const { page = 1, perPage = 10 } = params.pagination || {};
    const { field, order } = params.sort || {};

    const query: Record<string, any> = {
      limit: perPage,
      offset: (page - 1) * perPage,
    };

    if (field && order) {
      query.sort = field;
      query.order = order.toLowerCase();
    }

    console.log("the params object looks like:", params);

    if (params.filter && typeof params.filter === "object") {
      // Start with an empty array to hold filter conditions
      const filterConditions: string[] = [];

      // Iterate over each filter key-value pair
      Object.keys(params.filter).forEach((key) => {
        // Construct the filter condition string
        filterConditions.push(`${key}.eq~${params.filter[key]}`);
      });

      // Only add the filter parameter if filterConditions is not empty
      if (filterConditions.length > 0) {
        query[`filter`] = filterConditions.join("|");
      }
    }

    const queryString = stringify(query);
    const url = `${apiUrl}/${resource}?${queryString}`;
    const response = await httpClient(url);

    console.log(
      "the response for getList ingredients is: ",
      response.json.results,
    );
    return {
      data: response.json.results,
      total: response.json.total_results,
    };
  },

  getOne: (resource, params) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({
      data: json,
    })),

  update: (resource, params) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: json })),

  getMany: async (resource, params) => {
    console.log("The getMany params look like", params);

    const requests = params.ids.map((id) => {
      const url = `${apiUrl}/${resource}/${id}`;
      return httpClient(url).then(({ json }) => json);
    });

    const responses = await Promise.all(requests);

    console.log("The getMany responses look like:", responses);
    return { data: responses };
  },

  getManyReference: async (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const parentResource = params.target.replace(/_id$/, "");

    const queryString = Object.keys(params.filter)
      .map((key) => `${key}.eq~${encodeURIComponent(params.filter[key])}`)
      .join("|");

    const url = `${apiUrl}/${parentResource}/${params.id}/${resource}?sort=${field}&order=${order.toLowerCase()}&limit=${perPage}&offset=${(page - 1) * perPage}&filter=${queryString}`;

    console.log("The getManyReference constructed URL looks like:", url);

    const response = await httpClient(url);

    console.log("The getManyReference response looks like:", response);

    return {
      data: response.json.results,
      total: response.json.total_results,
      pageInfo: {
        hasNextPage: page * perPage < response.json.total_results,
        hasPreviousPage: page > 1,
      },
    };
  },

  // DOESNT WORK:
  updateMany: async (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
      method: "PUT",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: json }));
  },

  create: (resource, params) =>
    httpClient(`${apiUrl}/${resource}`, {
      method: "POST",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({
      data: { ...params.data, id: json.id } as any,
    })),

  delete: (resource, params) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: "DELETE",
    }).then(({ json }) => ({ data: json })),

  // DOESNT WORK:
  deleteMany: async (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
      method: "DELETE",
    }).then(({ json }) => ({ data: json }));
  },
};
