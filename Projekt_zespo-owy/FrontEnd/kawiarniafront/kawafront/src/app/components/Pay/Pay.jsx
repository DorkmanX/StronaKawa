import React from "react";
import "./Pay.scss";
import { Wrapper, Section } from "./components";
import PDFDocument from "../PDFDocument/PDFDocument";
import { PDFViewer } from "@react-pdf/renderer";
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from "react-redux";
import Payment from "../Payment/Payment";
import Delivery from "../Delivery/Delivery";
import ParallaxBackground from "../ParallaxBackground/ParallaxBackground";
function getTotalPrice(itemsArr) {
  let price = 0;
  itemsArr.map((item) => (price += item.price));
  return price;
}
function Pay() {
  const user = useSelector((state) => state.user.data);
  const items = useSelector((state) =>
    state.bucket.bucketItems.filter((item) => item.isSelectedToPay === true)
  );
  const adress = useSelector((state) => state.order.adress);
  const latLng = useSelector((state) => state.order.latLng)
  return (
    <Wrapper>
      <Section>
        <PDFViewer width="60%" height={500} className="iframe">
          <PDFDocument user={user} items={items} />
        </PDFViewer>
      </Section>
      <Section>
        <ParallaxBackground/>
      </Section>
      <Section>
        <Delivery />
      </Section>

      {Object.keys(adress).length !== 0  || latLng ?  (
        <Section>
          <Payment
            price={getTotalPrice(items)}
            shouldRenderPaymentMethods={true}
            isAddToBucketVisible={false}
            orderedProducts={items}
          />
        </Section>
      ) : null}
    
    </Wrapper>
  );
}
export default Pay;
