import * as my_exports_package_feature_a from "my-exports-package/features/feature_a.js"; // 子路径模式
import * as my_exports_package_feature_module_a from "my-exports-package/features/module/module_a.js";
import * as my_exports_package_lib from "my-exports-package/lib";

console.log(my_exports_package_feature_a);
console.log(my_exports_package_lib);
console.log(my_exports_package_feature_module_a);
