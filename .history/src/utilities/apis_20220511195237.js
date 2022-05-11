export const fetchAllData = async(url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export const fetchPersonQuantity = async(quantity) => {
    const response = await fetch(`https://fakerapi.it/api/v1/persons?_quantity=${quantity}`);
    const data = await response.json();
    return data;
}

export const fetchCompanyQuantity = async(quantity) => {

    const response = await fetch(`https://fakerapi.it/api/v1/companies?_quantity=${quantity}`);
    const data = await response.json();
    return data;
}

export const fetchProductQuantity = async(quantity) => {
    const response = await fetch(`ttps://fakerapi.it/api/v1/products?_quantity=${quantity}`);
    const data = await response.json();
    return data;
}



// https://fakerapi.it/api/v1/products?_quantity=1
// https://fakerapi.it/api/v1/companies?_quantity=1
// https://fakerapi.it/api/v1/persons?_quantity=10