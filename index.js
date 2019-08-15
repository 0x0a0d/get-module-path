const path = require('path');

module.exports = function(module_name, calculate_relative_path_with) {
  try {
    const package_json_path = require.resolve(module_name + '/package.json');
    const module_path = path.dirname(package_json_path);
    if (calculate_relative_path_with == null) {
      return module_path;
    } else {
      return path.relative(calculate_relative_path_with, module_path);
    }
  } catch (e) {
    return null;
  }
};
