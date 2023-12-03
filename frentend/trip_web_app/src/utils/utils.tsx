export const mapKeysToCamelCase = (obj: Record<string, any>): Record<string, any> => {
    const camelCasedObject: Record<string, any> = {};
    
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const camelCaseKey = key.replace(/_([a-z])/g, (match, letter) => letter.toUpperCase());
        camelCasedObject[camelCaseKey] = obj[key];
      }
    }
    
    return camelCasedObject;
  };