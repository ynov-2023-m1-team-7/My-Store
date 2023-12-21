export async function getProducts(take) {
    try {
        console.log(`http://localhost:3030/api/products?take=${take}`);
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/products?take=${take}`, {
            cache: "no-store",
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log(res);
        const data = await res.json();
        return data;
    }
    catch (err) {
        return err;
    }
}

export async function getProduct(id) {
    try {
        const res = await fetch(`http://localhost:3030/api/products/${id}`, {
            cache: "no-store",
        });
        const data = await res.json();
        return data;
    }
    catch (err) {
        return err;
    }
}
