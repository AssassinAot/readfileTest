# DATA EXERCISE in HapiJS

Note: Use HapiJS to create the below mentioned routes

## Exercise 1: Read a JSON file

GET /first-user/
> This will read info.json file and return the name of the first user in the data array.

Expected Response

"Teresa"

## Exercise 2: Sort the array

GET /first-user/?sort=true
> If sort=true, the API will sort the array and return the first name of the sorted data.
> if sort=false, the API will return the first name of the array.

Expected Response

"John"

## Exercise 3: Searching userData and read file

GET /user-data/?user="Teresa"
> The API will find the datafile for the passed user from `info.json` (`teresa.txt`)
> After getting the data file, the API will read the data file and return the data as the response.

Expected Response:

```
This contains metadata for TERESA
Sample data for TERESA
67 53 98 23 121
12 23 43 12 45
```



> __Note:__ Use `POSTMAN` for testing the APIs and `nodemon` for fast development
