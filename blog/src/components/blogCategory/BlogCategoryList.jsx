
// rfce
import React, { useEffect, useState } from "react";

//REDIRECT
import { useNavigate } from "react-router-dom";
import BlogCategoryApi from "../../services/BlogCategoryApi";

// FUNCTION
function BlogCategoryList({ t, i18n, props }) {
  // REDIRECT
  let navigate = useNavigate();

  // STATE
  const [blogCategoryApiImplListData, setBlogCategoryApiImplListData] =
      useState([]);

  // EFFECT
  useEffect(() => {
    fetchBlogCategoryApiImplListData();
  }, []);

  // API CALLS (asyn-await)
  const fetchBlogCategoryApiImplListData = async () => {
    try {
      const response = await BlogCategoryApi.categoryApiList();
      setBlogCategoryApiImplListData(response.data);
    } catch (error) {
      console.error("Error fetching blogCategoryApiImplListData: ", error);
    }
  }; //end fetchBlogCategoryApiImplListData
  ///////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////

  // FUNCTION (promise)
  // Listeden eğer bir manipulation(değiştirirsem) liste güncel halini göstersin.
  const listManipulationAfter = () => {
    BlogCategoryApi.categoryApiList()
        .then((response) => {
          console.log(response);
          console.log(response.data);
          console.log(response.status);
          console.log(response.headers);
          if (response.status === 200) {
            setBlogCategoryApiImplListData(response.data);
          }
        })
        .catch((error) => {
          error.message && console.error("Error: ", error.message);
        });
  };

  ///////////////////////
  // SPEED DATA
  // DELETE ALL DATA

  ///////////////////////
  // LOCAL STORAGE VIEW-ID
  const localStorageViewBlogCategoryId = (id) => {
    // 1.YOL (id=> useParams)
    // 2.YOL (id=> localStorage)
    localStorage.setItem("view_blogCategory_Id", id);
  };

  // LOCAL STORAGE UPDATE-ID
  const localStorageUpdateBlogCategoryId = (id) => {
    // 1.YOL (id=> useParams)
    // 2.YOL (id=> localStorage)
    localStorage.setItem("update_blogCategory_Id", id);
  };

  ///////////////////////
  // BLOG CATEGORY DELETE
  const setDeleteBlogCategory = (id) => {
    if (Window.confirm(id + " blog category Silmek istiyor musunuz ?")) {
      BlogCategoryApi.categoryApiDeleteById(id)
          .then((response) => {
            if (response.status === 200) {
              listManipulationAfter();
              navigate("/blog/category/list"); //1.YOL
              // window.location="/blog/category/list"; //2.YOL
            }
          })
          .catch((err) => {
            console.error("Error: ", err.message);
            window.alert("Blog kategori silinirken hata oluştu.");
            err.message && console.error("Error: ", err.message);
            window.location = "/blog/category/list";
            //return; // İşlem iptal edilirse return yapıyoruz.
          });
    } else {
      window.alert("Silme işlemi iptal edildi.");
      window.location = "/blog/category/list";
    }
  };
  ///////////////////////
  // CRUD
  // BLOG CATEGORY CREATE
  // BLOG CATEGORY FIND
  // BLOG CATEGORY UPDATE

  ///////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////
  // return
  return <React.Fragment>
    BlogCategoryList
  </React.Fragment>; //end return
} //end BlogCategoryList

// EXPORT
export default BlogCategoryList;
