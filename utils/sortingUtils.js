// sortingUtils.js

// Function to parse sorting options
exports.parseSortOptions = function (sort, order) {
  const sortOptions = {};

  if (sort) {
    // Ensure `sort` and `order` are valid and non-empty
    if (sort && order) {
      // Map `order` values to MongoDB sort order values
      const orderValue = order.toLowerCase() === 'desc' ? -1 : 1;

      // Set the sortOptions object
      sortOptions[sort] = orderValue;
    } else {
      console.log('Invalid sort or order parameters');
    }
  }

  return sortOptions;
};

// Function to parse inclusion options (filter)
exports.parseFieldsOptions = function (fields) {
  const fieldsOptions = {};
  if (fields) {
    // Split by pipe character instead of comma
    fields.split('|').forEach((field) => {
      field = field.trim(); // Trim any extra whitespace
      if (field) {
        // Check if the field is not an empty string
        fieldsOptions[field] = 1;
      }
    });
  }
  return fieldsOptions;
};
exports.parseFilterOptions = function (filter) {
  const filterOptions = {};

  if (filter) {
    // Split multiple filters using the delimiter '|'
    const filters = filter.split('|');

    filters.forEach((filter) => {
      const dotIndex = filter.lastIndexOf('.');
      if (dotIndex !== -1) {
        const fieldName = filter.substring(0, dotIndex);
        const operatorAndValue = filter.substring(dotIndex + 1);

        const operatorIndex = operatorAndValue.indexOf('~');
        if (operatorIndex !== -1) {
          const operatorType = operatorAndValue.substring(0, operatorIndex);
          let value = operatorAndValue.substring(operatorIndex + 1).trim();

          console.log('Field Name:', fieldName);
          console.log('Operator:', operatorType);
          console.log('Raw Value:', value);

          if (!filterOptions[fieldName]) {
            filterOptions[fieldName] = {};
          }

          try {
            if (operatorType === 'eq' && isNaN(value)) {
              // Regex for partial matches if value is not a number
              filterOptions[fieldName]['$regex'] = new RegExp(value, 'i');
            } else if (!isNaN(value)) {
              // Handle numeric values
              value = parseFloat(value);
              console.log(`Parsed Value as Number: ${value}`);

              switch (operatorType) {
                case 'eq':
                  filterOptions[fieldName]['$eq'] = value;
                  break;
                case 'gt':
                  filterOptions[fieldName]['$gt'] = value;
                  break;
                case 'gte':
                  filterOptions[fieldName]['$gte'] = value;
                  break;
                case 'lt':
                  filterOptions[fieldName]['$lt'] = value;
                  break;
                case 'lte':
                  filterOptions[fieldName]['$lte'] = value;
                  break;
                default:
                  console.log(`Unsupported numeric operator: ${operatorType}`);
              }
            } else if (!isNaN(Date.parse(value))) {
              // Handle date values
              const parsedValue = new Date(value).toISOString();
              console.log(`Parsed Value as Date: ${parsedValue}`);

              switch (operatorType) {
                case 'eq':
                  filterOptions[fieldName]['$gte'] = parsedValue;
                  const nextDay = new Date(parsedValue);
                  nextDay.setDate(nextDay.getDate() + 1);
                  filterOptions[fieldName]['$lt'] = nextDay.toISOString();
                  break;
                case 'gt':
                  filterOptions[fieldName]['$gt'] = parsedValue;
                  break;
                case 'gte':
                  filterOptions[fieldName]['$gte'] = parsedValue;
                  break;
                case 'lt':
                  filterOptions[fieldName]['$lt'] = parsedValue;
                  break;
                case 'lte':
                  filterOptions[fieldName]['$lte'] = parsedValue;
                  break;
                default:
                  console.log(`Unsupported date operator: ${operatorType}`);
              }
            } else {
              // Handle other types of values
              filterOptions[fieldName][`$${operatorType}`] = value;
            }
          } catch (error) {
            console.error('Error while parsing filter options:', error);
          }

          console.log('Filter Options:', filterOptions);
        } else {
          console.log('Invalid filter format:', filter);
        }
      } else {
        console.log("No operator found, treating as 'eq'");
        filterOptions[filter] = { $eq: true }; // Default to equality check
        console.log('Filter Options:', filterOptions);
      }
    });
  }

  return filterOptions;
};
