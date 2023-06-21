# LAB71
Here is a summary of what I have implemented for the Lab71 exercise

[assignment](./assignment.md)

## Web Front End:
https://fnb-lab-71.web.app/
  - Implemented with Vue3 and deployed to Firebase
  - Responsive Design will be a fail
  - Not much time spent (very related to responsiveness)
  - There is no API data caching, it is always fetched

## PLP/Search Functionality:
https://plp-search-z7xnz3up5q-uc.a.run.app/
  - Implemented in vanilla javascript as a GCP Cloud Function
  - Supports query parameters:
    - searchTerm
    - pageOffset
    - pageSize
  - This is implemented by directly querying the JSON in the cloud function.
    - Usage of an actual datastore is not completed.


Currently only the pageOffset and searchTerm are fully wired in. Paging will loop back to the first page and vice-versa.

Search only applied to the product name at this point.

Sorting is only by product name at this point.
