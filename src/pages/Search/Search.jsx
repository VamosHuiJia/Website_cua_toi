import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "~/styles/search.css";
// Library aos
import AOS from "aos";
import "aos/dist/aos.css";
// Import icon from react-icons

export default function Search() {
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({
            duration: 1200,
            anchorPlacement: "top-bottom",
            once: true,
        });
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();

        if (!searchValue) {
            toast.error("Vui lòng nhập từ khóa tìm kiếm");
            return;
        }
        if (searchValue.trim().length > 255) {
            toast.error("Từ khóa tìm kiếm phải có ít hơn 255 ký tự");
            return;
        }
        navigate("/category/all-product", {
            state: { searchTerm: searchValue.trim() },
        });
        setSearchValue("");
    };

    return (
        <section className="searchPage">
            <h1 data-aos="fade-down" className="searchPage__title">
                Nhập sản phẩm bạn muốn tìm
            </h1>
            <form onSubmit={handleSearch} className="searchPage__input-wrapper" data-aos="fade-up">
                <input
                    type="text"
                    className="searchPage__input"
                    placeholder="Nhập sản phẩm bạn muốn tìm"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    maxLength={255}
                />
                <button type="submit" className="searchPage__icon-button">
                    <img
                        src={`${process.env.REACT_APP_BASE_URL}/assets/icon/search.svg`}
                        alt="Search"
                        className="searchPage__icon"
                        size={20}
                    />
                </button>
            </form>
        </section>
    );
}
