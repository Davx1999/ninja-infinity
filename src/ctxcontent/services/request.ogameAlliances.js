import { fetchXml } from "../../util/fetching.js";

/**
 *
 * @param {string} universe
 * @return {Promise<FetchResponse<Document>>}
 */
export function requestOGameAlliances(universe) {
  const uni = universe.split("-"),
  url = new URL(`${window.location.protocol}//${window.location.host}/api/${uni[0]}/${uni[1]}/alliances.xml`);

  return fetchXml(url, { method: "GET" });
}
