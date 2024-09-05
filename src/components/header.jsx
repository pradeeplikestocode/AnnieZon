import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = ({handleSearch, defaultSearch}) => {

    const nav = useNavigate();

    const [search, updateSearch] = useState(defaultSearch || "");

    const internalHandleSearch = (searchText) => {
        if(!handleSearch) {
            nav(`/home?q=${searchText}`)
        } else {
            handleSearch(searchText);
        }
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <span role="button"     className="navbar-brand" onClick={() => nav("/")}>Anniezon</span>
                    <div className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={e => updateSearch(e.target.value)} />
                        <button className="btn btn-outline-success" type="submit" onClick={() => internalHandleSearch(search)}>Search</button>
                    </div>
                    {/* <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                        </li>
                    </ul> */}
                </div>
            </div>
        </nav>
    );

}

export default Header;