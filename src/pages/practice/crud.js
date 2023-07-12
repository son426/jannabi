import { useEffect, useState } from "react";
import { db } from "../../config/firebase-config";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

function Crud() {
  const [productList, setProductList] = useState([]);
  const [newName, setNewName] = useState();
  const [newPrice, setNewPrice] = useState();

  const [updatedName, setUpdatedName] = useState();

  const productCollectionRef = collection(db, "product");

  // READ DATA
  const getProductList = async () => {
    try {
      const data = await getDocs(productCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProductList(filteredData);
    } catch (error) {
      console.error(error);
    }
  };

  // CREATE DATA
  const addProduct = async () => {
    try {
      await addDoc(
        productCollectionRef, //
        { name: newName, price: newPrice }
      );
      getProductList(); // 완료되면 상품리스트 다시 read
    } catch (error) {
      console.error(error);
    }
  };

  // DELETE DATA
  const deleteProduct = async (id) => {
    // document id뿐만 아니라 컬렉션 id를 얻어야함.
    // 애초에 DOM 요소 만들때, id를 집을 수 있는 요소를 넣어주기(jsx 태그에)
    // 그러고 나서 parameter로 id를 받아오고 그걸 넣어주면 됨.
    const productDoc = doc(db, "product", id); // db, document id, collection id
    await deleteDoc(productDoc);
  };

  // UPDATE DATA
  // 얘도 id 집어와야해서, DOM 요소에 미리 작업쳐줘야함.
  const updateProductName = async (id) => {
    const productDoc = doc(db, "product", id);
    await updateDoc(productDoc, { name: updatedName });
  };

  useEffect(() => {
    getProductList();
  }, []);

  return (
    <>
      <div>
        <input
          placeholder="name"
          onChange={(e) => setNewName(e.target.value)}
        />
        <input
          placeholder="price"
          type="number"
          onChange={(e) => setNewPrice(Number(e.target.value))}
        />
        <button onClick={addProduct}>상품 생성</button>
      </div>
      {productList.map((product, index) => {
        return (
          <div key={index}>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <button onClick={() => deleteProduct(product.id)}>상품 삭제</button>
            <div>
              <input
                placeholder="상품명 업데이트"
                onChange={(e) => setUpdatedName(e.target.value)}
              />
              <button onClick={() => updateProductName(product.id)}>
                업데이트하기
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Crud;
