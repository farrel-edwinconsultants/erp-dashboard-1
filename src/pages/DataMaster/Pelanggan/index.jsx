import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import jsCookie from "js-cookie";
import Url from "../../../Config";
import axios from "axios";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import PelangganTable from "../../../components/mollecules/PelangganTable";

const Pelanggan = () => {
  const token = jsCookie.get("auth");
  const [userAccess, setUserAccess] = useState([]);

  useEffect(() => {
    axios
      .get(`${Url}/get_user_access_rights?ability_name=create-customer`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUserAccess(res.data);
        console.log(res.data);
      });
  }, []);

  if (userAccess) {
    return (
      <div className="container shadow-lg p-3 mb-5 bg-body rounded d-flex flex-column">
        <div className="row">
          <div className="col text-title text-start">
            <h3 className="title fw-bold">Daftar Pelanggan</h3>
          </div>
          {userAccess?.map((d) => {
            if (d.ability_name === "create-customer") {
              return (
                <div className="col button-add text-end me-3">
                  <Link to="/pelanggan/buat">
                    <button type="button" className="btn btn-primary btn-sm">
                      <AddOutlinedIcon />
                    </button>
                  </Link>
                </div>
              );
            }
          })}
        </div>
        <PelangganTable />
      </div>
    );
  } else {
    <div>
      <div className="text-title text-start">
        <h3 className="title fw-bold">Daftar Pelanggan</h3>
      </div>
      <PelangganTable />
    </div>;
  }
};

export default Pelanggan;
