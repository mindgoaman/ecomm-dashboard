import React, { useEffect, useState } from 'react';
import HeaderComponent from '../component/HeaderComponent';

const AddProductPage = () => {

    const [name, setName] = useState('')
    const [file, setFile] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')

    useEffect(() => {
        let getUserData = localStorage.getItem('user_data')
        console.log("user data", JSON.parse(getUserData))
    }, [])

    const onPressAddProduct = () => {
        const product = { name, file, price, description }
        localStorage.setItem("add_product", JSON.stringify(product))
        console.log("add products",product)
    }

    return (
        <>
            <HeaderComponent />
            <div className="col-sm-6 offset-sm-3">
                <h1>
                    Add Product Page
                </h1>
                <input
                    onChange={(name) => setName(name.target.value)}
                    placeholder="name"
                    type="text"
                    value={name}
                    className="form-control"
                >
                </input>
                <br />
                <input
                    onChange={(file) => setFile(file.target.value)}
                    placeholder="file"
                    type="file"
                    value={file}
                    className="form-control"
                >
                </input>
                <br />
                <input
                    onChange={(price) => setPrice(price.target.value)}
                    placeholder="price"
                    type="text"
                    value={price}
                    className="form-control"
                >
                </input>
                <br />
                <input
                    onChange={(description) => setDescription(description.target.value)}
                    placeholder="description"
                    type="text"
                    value={description}
                    className="form-control"
                >
                </input>
                <br />
                <button
                    onClick={onPressAddProduct}
                    className="btn btn-primary"
                >
                    Add Product
                </button>
            </div>
        </>
    )
}

export default AddProductPage;