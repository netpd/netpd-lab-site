/*
  for site search component. searches site/domain via google.
*/

{
  // when user submits site search form/box
  window.onSiteSearchSubmit = (event) => {
    event.preventDefault();
    const site = window.location.origin;
    const query = event.target.elements.query.value;
    window.location = "https://duckduckgo.com/?q=site:" + site + " " + query;
  };
}
