import { fetchXml } from "../../util/fetching.js";

export function requestOGamePlanets(universe) {

  const uni = universe.split("-"),
  url = new URL(`${window.location.protocol}//${window.location.host}/api/${uni[0]}/${uni[1]}/universe.xml`);

  return fetchXml(url, { method: "GET" });
}
