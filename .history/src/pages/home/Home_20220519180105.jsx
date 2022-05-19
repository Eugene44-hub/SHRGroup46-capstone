/** @format */

import React, { useEffect, useRef, useState } from "react";
import Currency from 'react-currency-formatter';

import styles from "./Home.module.css";
import {
  VictoryBar,
  VictoryLine,
  VictoryPie,
  VictoryChart,
  VictoryAxis,
} from "victory";
import Assessment from "@mui/icons-material/Assessment";
import { Productdata, Piedata, PieGatewaydata } from "./data";
//components should be imported from here if needed
// make use of your normal import statement here to import components
// make use of the css module folder or tailwind or you can use inline styles
// check the sample on nav and footer for css modules

const Home = ({products}) => {


  return (
    <div className={`${styles.body}`}>
      <div className={`${styles.section1_container}`}>
        <div className={`${styles.eachparentdivinsection1a}`}>
          <div className={`${styles.salesinfodiv}`}>
            <div className={`${styles.eachsales}`}>
              <p>Total Sales</p>
              <h3>$6,350</h3>
            </div>
            <div className={`${styles.eachsales}`}>
              <p>Average Monthly Sales</p>
              <h3>$4,652</h3>
            </div>
            <div className={`${styles.eachsales}`}>
              <p>New Sales</p>
              <h3>$1,350</h3>
            </div>
          </div>
          <div className={`${styles.barchartdiv}`}>
            <strong>
              Product Monthly Performance{" "}
              <Assessment id={`${styles.margin1}`} />
            </strong>
            <VictoryChart domainPadding={20}>
              <VictoryAxis
                id={`${styles.axis}`}
                tickValues={[1, 2, 3, 4, 5, 6, 7]}
                tickFormat={[
                  "Jan",
                  "Feb",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                ]}
              />
              <VictoryAxis dependentAxis tickFormat={(x) => x} />
              <VictoryBar data={Productdata} x="month" y="sales" />
            </VictoryChart>
          </div>
        </div>
        <div className={`${styles.eachparentdivinsection1b}`}>
          <h2 id={`${styles.headtext}`}>
            Top products here <Assessment id={`${styles.margin1}`} />
          </h2>
          <ul className={`${styles.products}`}>

          {products && products.map((product,index) => (
               <li key={index} className={`${styles.product}`}>
               <h4>{product.name.substring(0, 15)}</h4>
               <strong><Currency quantity={product.price} currency="NGN" /></strong>
             </li>
          ))}
          
            {/* <div className={`${styles.product}`}>
              <h4>The Javascript Beginners course 1</h4>
              <strong>$45</strong>
            </div> */}
            {/* <div className={`${styles.product}`}>
              <h4>The Javascript Beginners course 1</h4>
              <strong>$45</strong>
            </div>
            <div className={`${styles.product}`}>
              <h4>The Javascript Beginners course 1</h4>
              <strong>$45</strong>
            </div>
            <div className={`${styles.product}`}>
              <h4>The Javascript Beginners course 1</h4>
              <strong>$45</strong>
            </div>
            <div className={`${styles.product}`}>
              <h4>The Javascript Beginners course 1</h4>
              <strong>$45</strong>
            </div>
            <div className={`${styles.product}`}>
              <h4>The Javascript Beginners course 1</h4>
              <strong>$45</strong>
            </div> */}
          </ul>
        </div>
      </div>
      <div className={`${styles.section2_container}`}>
        <div
          id={`${styles.shadow}`}
          className={`${styles.usersStatsContainer}`}
        >
          <strong>
            Users Stats <Assessment id={`${styles.margin1}`} />
          </strong>
          <div className={`${styles.UserStats}`}>
            <div className={`${styles.eachusersStats}`}>
              <strong>New Users</strong>
              <h3>1,350</h3>{" "}
            </div>
            <div className={`${styles.eachusersStats}`}>
              <strong>Active Users </strong>
              <h3>2,350</h3>{" "}
            </div>
            <div className={`${styles.eachusersStats}`}>
              <strong>Average Monthly Users Gained</strong>
              <h3>4,150</h3>{" "}
            </div>
            <div className={`${styles.eachusersStats}`}>
              <strong>Total Users</strong>
              <h3>5,332</h3>{" "}
            </div>
          </div>
        </div>
        <div
          id={`${styles.shadow}`}
          style={{}}
          className={`${styles.piechartdiv}`}
        >
          <strong>
            Top 5 Product Monthly Performance{" "}
            <Assessment id={`${styles.margin1}`} />
          </strong>
          <VictoryPie data={Piedata} />
        </div>
      </div>
      <div className={`${styles.section3_container}`}>
        <div>
          <strong>
            Gateway Stats <Assessment id={`${styles.margin1}`} />
          </strong>
          <VictoryPie data={PieGatewaydata} />
        </div>
        <div>
          <strong>
            Gateway Stats <Assessment id={`${styles.margin1}`} />
          </strong>
          <VictoryChart>
            <VictoryLine data={PieGatewaydata} />
          </VictoryChart>
        </div>
        <div>
          <strong>
            Gateway Stats <Assessment id={`${styles.margin1}`} />
          </strong>
          <VictoryPie data={PieGatewaydata} />
        </div>
        <div>
          <strong>
            Gateway Stats <Assessment id={`${styles.margin1}`} />
          </strong>
          <VictoryPie data={PieGatewaydata} />
        </div>
      </div>
    </div>
  );
};

export default Home;
