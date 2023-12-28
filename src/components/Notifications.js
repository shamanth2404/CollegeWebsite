import React from "react";
import "./notifications.css";
import { IoNewspaperOutline } from "react-icons/io5";
import { RiArticleLine } from "react-icons/ri";
import { MdFiberNew } from "react-icons/md";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { FaRegFilePdf } from "react-icons/fa";

function Notifications() {
  
  
  return (
    <div className="container my-3 py-3">
      <div className="row p-3">
        <div className="col">
          <h2>
            <IoNewspaperOutline className="icon" />
            News & Events
          </h2>
          <div className="news">
            <div className="news-top">
              <div className="date-month">
                <span className="date">24</span>
                <span className="month">SEP</span>
              </div>
              <p>
                " Award of 100 5G use case Labs to to selected academic
                institutions was held by Hon'ble Prime Minister Shri. Narendra
                Modiji on 27th October 2023 as part of Indian Mobile Congress,
                2023
                <MdFiberNew className="icon" />
              </p>
            </div>
            <a href="#">
              read more
              <RiArticleLine className="icon" />
            </a>
          </div>
          <div className="news">
            <div className="news-top">
              <div className="date-month">
                <span className="date">12</span>
                <span className="month">SEP</span>
              </div>
              <p>
              Interactive contents development enabling the better presentation of fluid mechanics and hydraulic engineering concept in engineering education 
                <MdFiberNew className="icon" />
              </p>
            </div>
            <a href="#">
              read more
              <RiArticleLine className="icon" />
            </a>
          </div>
          <div className="news">
            <div className="news-top">
              <div className="date-month">
                <span className="date">31</span>
                <span className="month">AUG</span>
              </div>
              <p>
              Department of Electronics and Instrumentation Engineering, presents a one day workshop on ADFT-2023,'' Antenna design, Fabrication and testing  workshop", on 16th June 2023 (Friday)  at  Auditorium 1,PJAB , BMSCE.
              </p>
            </div>
            <a href="#">
              read more
              <RiArticleLine className="icon" />
            </a>
          </div>
          <div className="news">
            <div className="news-top">
              <div className="date-month">
                <span className="date">01</span>
                <span className="month">APR</span>
              </div>
              <p>
              Faculty development programme on "Current Trends in Material Physics for Engineering Applications" by the Department of Physics from 15-05-2023 to 19-05-2023. 
              </p>
            </div>
            <a href="#">
              read more
              <RiArticleLine className="icon" />
            </a>
          </div>
          <button className="btn btn-danger btn-sm">View All</button>
        </div>

        <div className="col">
          <div className="top-tab">
            <div className={`notification-tab`} >Notifications</div>
            <div className={`notification-tab`} >COE Notifications</div>
          </div>
          <div className="content-tab">
            <div className="content">
              <i><MdOutlineNotificationsNone className="icon" /></i>
              <p>
                Applications are invited for the position of Junior Research
                Fellow (JRF) Senior Research Fellow (SRF) and Research Assistant
                (RA), in a research and development project (under CHIPS TO
                START-UP PROGRAMME (C2S) CATEGORY – I PROPOSALS) for the
                duration of 2 years (2023-2025){" "}
                <span>
                  <FaRegFilePdf className="icon" />
                  read more
                </span>
              </p>
            </div>
            <div className="content">
              <i><MdOutlineNotificationsNone className="icon" /></i>
              <p>
                Call for recruitment of Field Officer and Resaerch Assistant as
                per ICSSR for Short-term Empirical Research Project
                <span>
                  <FaRegFilePdf className="icon" />
                  read more
                </span>
              </p>
            </div>
            <div className="content">
              <i><MdOutlineNotificationsNone className="icon" /></i>
              <p>
                Call for Application : Research Study (National Commission for
                Women) on : “Women in Decision Making Roles in Corporate”
                <span>
                  <FaRegFilePdf className="icon" />
                  read more
                </span>
              </p>
            </div>
            <div className="content">
              <i><MdOutlineNotificationsNone className="icon" /></i>
              <p>
                Notification for Faculty Recruitment under Management Cadre for
                Computer Science Engineering, Information Science Engg, &
                Machine Learning( AI & ML), CSE (Data Science),CSE (IOT and
                Cyber Security & blockchain technology), Artificial Intelligence
                (AI), and Data Science. Note:- 7th PAY SCALE AS PER MANAGEMENT
                NORMS.
                <span>
                  <FaRegFilePdf className="icon" />
                  read more
                </span>
              </p>
            </div>
            <div className="content">
              <i><MdOutlineNotificationsNone className="icon" /></i>
              <p>
              CHECK LIST FOR FIRST YEAR BE ADMISSION FOR STUDENTS REPORTING TROUGH VARIOUS QUOTA FOR THE ACADEMIC YEAR 2023-24 in BMSCE. 
                <span>
                  <FaRegFilePdf className="icon" />
                  read more
                </span>
              </p>
            </div>
            <div className="content">
              <i><MdOutlineNotificationsNone className="icon" /></i>
              <p>
                AFees in respect of 1 year, II year lateral entry BE CET,
                Comed-K, and Management Quota admission for the year 2023-24
                <span>
                  <FaRegFilePdf className="icon" />
                  read more
                </span>
              </p>
            </div>
            <button className="btn btn-danger btn-sm mt-3">View All</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notifications;
