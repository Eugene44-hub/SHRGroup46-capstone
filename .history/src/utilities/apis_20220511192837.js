export const fetchPersonData = async() => {
    const response = await fetch("https://fakerapi.it/api/v1/persons?_quantity=10");
    const data = await response.json();
    return data;
}

export const fetchCompanyData = async() => {
    const response = await fetch("https://fakerapi.it/api/v1/companies?_quantity=1");
    const data = await response.json();
    return data;
}

export const fetchProductData = async() => {
    const response = await fetch("https://fakerapi.it/api/v1/products?_quantity=1 ");
    const data = await response.json();
    return data;
}


// https://fakerapi.it/api/v1/products?_quantity=1