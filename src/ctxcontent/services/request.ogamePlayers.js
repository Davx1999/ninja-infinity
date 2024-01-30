import { fetchXml } from "../../util/fetching.js";

/**
 *
 * @param {string} universe sub part of domain server. Ejm: s1-es, s180-us
 * @return {Promise<FetchResponse<Document>>} XML
 */
export function requestOGamePlayers(universe) {
  const uni = universe.split("-"),
  url = new URL(`${window.location.protocol}//${window.location.host}/api/${uni[0]}/${uni[1]}/players.xml`);

  return fetchXml(url, { method: "GET" });
}
