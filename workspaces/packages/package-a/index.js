import lodash from "lodash";
import dayjs from "dayjs";
import { commonFn } from "common";

export function Hello() {
  console.log("我是package a");
}

console.log("lodash", lodash);
console.log("dayjs", dayjs);

commonFn();
