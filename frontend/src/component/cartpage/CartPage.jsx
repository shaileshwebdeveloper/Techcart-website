import { Box, Text, Button } from "@chakra-ui/react";
import React from "react";
import "../css/cartPage.css";
import Carousel from "react-elastic-carousel";
import CarouselItem from "./CarouselItem";
import CartItem from "./cartItem";
// import axios from "axios";
import {Link} from "react-router-dom"
import CommonHeader from "./CommonHeader";

const Cart_page = () => {
  // const carousel_data= ()=>{
  //   axios.get("")
  // }

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 450, itemsToShow: 2, itemsToScroll: 2 },
    { width: 600, itemsToShow: 3, itemsToScroll: 3 },
    { width: 768, itemsToShow: 6, itemsToScroll: 4 },
    { width: 1200, itemsToShow: 6, itemsToScroll: 4 },
  ];

  const CarouselData = [
    {
      id: 1,
      "prod-link":
        "https://www.geekbuying.com/item/Robotic-Vacuum-Cleaner-Filter-For-Roborock-S7-480991.html?pmrm=ems-cart-relevant-emsch",
      prod_image:
        "https://img.gkbcdn.com/p/2020-11-28/xiaomi-jimmy-jv85-pro-cordless-handheld-vacuum-cleaner---purple-1606560899187._w280_.jpg",
      prod_title:
        "JIMMY JV85 Pro Cordless Handheld Flexible Vacuum Cleaner with 200AW Powerful Suction, 550W Digital Brushless Motor, 70 Minutes Run Time, Ultra-low noise for cleaning floors, furniture by Xiaomi",
      price: 15939.06,
    },
    {
      id: 2,
      "prod-link":
        "https://www.geekbuying.com/item/Creality-Ender-3-V2-Neo-3D-Printer-471203.html?pmrm=ems-cart-relevant-emsch",
      prod_image:
        "https://img.gkbcdn.com/p/2022-07-09/creality-ender-3-v2-3d-printer-with-upgraded-32-bit-silent-motherboard-732f54-1657351329700._w280_.JPG",
      prod_title:
        "Creality Ender-3 V2 Neo 3D Printer, CR Touch Auto-leveling, Full-Metal Bowden Extruder, 4.3inch Color Screen, 32Bit Mainboard, 220*220*250mm",
      price: 21728.6,
    },
    {
      id: 2,
      "prod-link":
        "https://www.geekbuying.com/item/GameSir-X2-Bluetooth-Gaming-controller-for-Android-iOS-Cloud-Gaming-459933.html?pmrm=ems-cart-relevant-emsch",
      prod_image:
        "https://img.gkbcdn.com/p/2021-06-05/GameSir-X2-Bluetooth-Gaming-controller-for-Android-iOS-Cloud-Gaming-459932-0._w280_.jpg",
      prod_title:
        "GameSir X2 Bluetooth Gaming controller for Android iOS Cloud Gaming Retractable Max 173mm",
      price: 4193.87,
    },
    {
      id: 4,
      "prod-link":
        "https://www.geekbuying.com/item/76-in-1-Pprodision-communication-Tool-Set-498505.html?pmrm=ems-cart-relevant-emsch",
      prod_image:
        "https://img.gkbcdn.com/p/2022-08-10/Ortur-LEP1-0-Laser-Engraving-Platform-513528-0._w280_.jpg",
      prod_title:
        "ORTUR LEP1.0 Laser Engraving Platform, 448x400mm Working Area, Fast Heat Dissipation",
      price: 8388.58,
    },
    {
      id: 5,
      "prod-link":
        "https://www.geekbuying.com/item/ACGAM-ET225E-Electric-Three-stage-Legs-Standing-Desk-Frame-White-501172.html?pmrm=ems-cart-relevant-emsch",
      prod_image:
        "https://img.gkbcdn.com/p/2021-01-26/ACGAM-ET225E-Electric-Three-stage-Legs-Standing-Desk-Frame-White-433635-2._w280_.jpg",
      prod_title:
        "ACGAM ET225E Electric Dual-motor Three-stage Legs Standing Desk Frame Workstation, Ergonomic Height Adjustable Desk Base Gaming Desk - White (Frame Only)",
      price: 12247.71,
    },
    {
      id: 6,
      "prod-link":
        "https://www.geekbuying.com/item/AOSIMAN-140FCC-Portable-14-Inch-Monitor-1920-1200-Resolution-517894.html?pmrm=ems-cart-relevant-emsch",
      prod_image:
        "https://img.gkbcdn.com/p/2022-10-15/AOSIMAN-140FCC-Portable-14-Inch-Monitor-1920-1200-Resolution-517894-0._w280_.jpg",
      prod_title:
        "AOSIMAN 140FCC 14'' Ultra Slim Portable Monitor 1920x1200 16:10 HDR 4mm IPS Narrow Frame Panel Plastic Shell 99% sRGB 1500:1 Full View External Display with Stereo Dual Speakers Mini HDMI USB Type-C Game Monitor Second Screen for Laptop PC Phone Xbox",
      price: 7717.43,
    },
    {
      id: 7,
      "prod-link":
        "https://www.geekbuying.com/item/Creality-Ender-3-S1-S1-Pro-CV-Laser-Module-24V1-6W-499752.html?pmrm=ems-cart-relevant-emsch",
      prod_image:
        "https://img.gkbcdn.com/p/2022-04-19/Creality-Ender-3-S1-S1-Pro-CV-Laser-Module-24V1-6W-499752-0._w280_.jpg",
      prod_title: "Creality Ender-3 S1/S1 Pro 24V 1.6W CV-Laser Module",
      price: 4193.87,
    },
    {
      id: 8,
      "prod-link":
        "https://www.geekbuying.com/item/FlashFish-E200-200W-Portable-Power-Station-490018.html?pmrm=ems-cart-relevant-emsch",
      prod_image:
        "https://img.gkbcdn.com/p/2021-12-29/0b786e5f0c6e4cacbff7d8e343a5c179-490018-0._w280_.jpg",
      prod_title:
        "FlashFish E200 200W Portable Power Station 151Wh Lithium Battery 1x Pure Sine Wave AC220V Output for RV Camping Van",
      price: 10569.83,
    },
    {
      id: 9,
      "prod-link":
        "https://www.geekbuying.com/item/ELEGLIDE-M1-Electric-Bike-27-5in-36V-7-5Ah-25Km-h-250W-Motor-Dark-Blue-517032.html?pmrm=ems-cart-relevant-emsch",
      prod_image:
        "https://img.gkbcdn.com/p/2022-04-24/eleglide-m1-upgraded-version-electric-bike-7-5ah-250w-motor-dark-blue-52768e-1650765701444._w280_.jpg",
      prod_title:
        "ELEGLIDE M1 Electric Bike Upgraded Version 27.5 Inch 250W Brushless Motor 36V 7.5Ah 25Km/h Max Speed Mountain Urban Bicycle SHIMANO Shifter 21 Speeds Removable Battery up to 65km Max Range IPX4 Aluminum Alloy Frame Dual Disk Brake - Dark Blue",
      price: 53314.76,
    },
    {
      id: 10,
      "prod-link":
        "https://www.geekbuying.com/item/KUGOO-M4-Folding-Offroad-Electric-Scooter-500W-Motor-45KM-Range-421459.html?pmrm=ems-cart-relevant-emsch",
      prod_image:
        "https://img.gkbcdn.com/p/2020-07-01/kugoo-m4-folding-offroad-electric-scooter-500w-motor-45km-range-1593586327367._w280_.jpg",
      prod_title:
        "KugooKirin M4 Folding Electric Off Road Scooter 10 Inch Pneumatic Tires 500W Brushless 10Ah Battery Motor 3 Speed Modes Dual Disc Brake Max Speed 45KM/h LED Display 45KM Long Range with Seat - Black",
      price: 39429.44,
    },
    {
      id: 11,
      "prod-link":
        "https://www.geekbuying.com/item/76-in-1-Pprodision-communication-Tool-Set-498505.html?pmrm=ems-cart-relevant-emsch",
      prod_image:
        "https://img.gkbcdn.com/p/2021-11-04/Flsun-SR-3D-Printer-476674-0._w280_.jpg",
      prod_title:
        "FLSUN SR 3D Printer, Pre-assembled, Dual Drive Extruder, Auto Levelling, 150mm/s-200mm/s Fast Printing, Capacitive Touch Screen, 260mm x330mm",
      price: 33473.79,
    },
    {
      id: 12,
      "prod-link":
        "https://www.geekbuying.com/item/Roborock-S7-S7-MAXV-S7-MAXV-PLUS-S7-MAXV-Ultra-Roborock-Robotic-Vacuum-Cleaner-Parts-Antibacterial-vibrarise-mop-cloth-498445.html?pmrm=ems-cart-relevant-emsch",
      prod_image:
        "https://img.gkbcdn.com/p/2022-03-29/eb257216811b44adbd62e75c09b184f0-498445-2._w280_.jpg",
      prod_title:
        "Antibacterial Vibrarise Mop Cloth for Roborock S7/S7 MAXV/S7 MAXV PLUS/S7 MAXV Ultra/S7 Pro Ultra Robotic Vacuum Cleaner",
      price: 838.1,
    },
    {
      id: 13,
      "prod-link":
        "https://www.geekbuying.com/item/NECESPOW-N1200-1200W-Portable-Power-Station-517811.html?pmrm=ems-cart-relevant-emsch",
      prod_image:
        "https://img.gkbcdn.com/p/2022-10-11/NECESPOW-N1200-1200W-Portable-Power-Station-517811-0._w280_.jpg",
      prod_title:
        "NECESPOW N1200 1200W Portable Power Station (Peak 2400W) Emergency Power Supply 1280Wh 400000mAh LiFePO4 Battery, Solar Power Generator Outdoor 230V AC Pure Sine Wave, 10 Outputs, LED Light Solar Generator Backup Supply for Outdoor, Camping, Home Use",
      price: 65537.31,
    },
    {
      id: 14,
      "prod-link":
        "https://www.geekbuying.com/item/Apods-i500-Bluetooth-5-0-Pop-up-Window-TWS-Earbuds--422056.html?pmrm=ems-cart-relevant-emsch",
      prod_image:
        "https://img.gkbcdn.com/p/2019-11-30/tws-i500-earphones-20191130100234539._w280_.jpg",
      prod_title:
        "Apods i500 Bluetooth 5.0 Pop-up Window TWS Earbuds Independent Usage Wireless Charging IPX5 - White",
      price: 1257.57,
    },
    {
      id: 15,
      "prod-link":
        "https://www.geekbuying.com/item/KUGOO-S1-Plus-Electric-Scooter-350W-Motor-7-5Ah-Black-426727.html?pmrm=ems-cart-relevant-emsch",
      prod_image:
        "https://img.gkbcdn.com/p/2021-10-27/kugoo-s1-plus-electric-scooter-350w-motor-7-5ah-black-1635320207903._w280_.jpg",
      prod_title:
        "KUGOO S1 Plus 8 inch Folding Electric Scooter 350W Motor 7.5Ah Clear LCD Display Screen Max 30km/h 3 Speed Modes Max Range up to 25km Easy Folding - Black",
      price: 21811.65,
    },
    {
      id: 16,
      "prod-link":
        "https://www.geekbuying.com/item/Kugoo-Kirin-G3-Electric-Scooter-1200W-Motor-52V-18AH-Battery-Black-473290.html?pmrm=ems-cart-relevant-emsch",
      prod_image:
        "https://img.gkbcdn.com/p/2022-09-29/X96-X4-Android-11-Amlogic-S905X4-8K-HDR-4GB-32GB-TV-BOX-517289-0._w280_.jpg",
      prod_title:
        "KugooKirin G3 Adventurers Electric Scooter 10.5 Inch 1200W Rear Motor 52V 18Ah Lithium battery Max Speed 50KM/H Touchable Display Control Panel TPU Suspension System IPX4 - Black",
      price: 77181.83,
    },
    {
      id: 17,
      "prod-link":
        "https://www.geekbuying.com/item/FlashFish-E200-200W-Portable-Power-Station-490018.html?pmrm=ems-cart-relevant-emsch",
      prod_image:
        "https://img.gkbcdn.com/p/2021-12-29/0b786e5f0c6e4cacbff7d8e343a5c179-490018-0._w280_.jpg",
      prod_title:
        "X96 X4 Android 11 Amlogic S905X4 8K HDR 4GB/32GB TV BOX 2.5G+5G WiFi Bluetooth 4.1 1000M LAN",
      price: 4613.34,
    },
    {
      id: 18,
      "prod-link":
        "https://www.geekbuying.com/item/ENGWE-EP-2-PRO-Folding-Electric-Moped-Bicycle-750W-Motor-Orange-500055.html?pmrm=ems-cart-relevant-emsch",
      prod_image:
        "https://img.gkbcdn.com/p/2022-05-16/engwe-ep-2-pro-folding-electric-moped-bicycle-750w-motor---orange-81991c-1652694030880._w280_.jpg",
      prod_title:
        "ENGWE EP-2 Pro Folding Electric Bike 2022 Version 20 Inch Fat Tire 750W Motor 13Ah Battery 35km/h Max Speed 100km Range Mountain Beach Snow Bicycle Dual Disc Brake - Orange",
      price: 82023.36,
    },
    {
      id: 19,
      "prod-link":
        "https://www.geekbuying.com/item/BMAX-MaxPad-I9-Plus-RK3566-Quad-Core-3GB-RAM-32GB-ROM-501493.html?pmrm=ems-cart-relevant-emsch",
      prod_image:
        "https://img.gkbcdn.com/p/2022-10-27/bmax-maxpad-i9-plus-rk3566-quad-core-3gb-ram-32gb-rom-0b169a-1666869213967._w280_.jpg",
      prod_title:
        "BMAX MaxPad I9 Plus Android 11 Tablet PC, 10.1 Inch RK3566 1.8GHz Quad Core, 3GB RAM 32GB ROM, 1280x800 IPS 16:10 10-point Touch, WiFi, Bluetooth5.0, USB Type-C, 5000mAh Battery for Study Work Entertainment Multi-Languages Black",
      price: 6291.23,
    },
    {
      id: 20,
      "prod-link":
        "https://www.geekbuying.com/item/KugooKirin-M4-PRO-Electric-Scooter-Upgraded-Version-500W-48V-18Ah-507618.html?pmrm=ems-cart-relevant-emsch",
      prod_image:
        "https://img.gkbcdn.com/p/2022-07-07/KugooKirin-M4-PRO-Foldable-Electric-Scooter-Upgraded-Version-48V-18Ah-507618-0._w280_.jpg",
      prod_title:
        "KugooKirin M4 PRO Foldable Electric Scooter Upgraded Version 10 Inch Off-Road Tyre 500W Brushless Motor 48V 18Ah Battery 3 Speed Modes Dual Disc Brake Max Speed 45KM/h LED Display 70KM Long Range with Seat Removable Saddle - Black",
      price: 52013.57,
    },
    {
      id: 21,
      "prod-link":
        "https://www.geekbuying.com/item/Roborock-Q7-MAX--S7-MAXV-Ul-automatic-suction-station-Dust-Bag---3-Pcs-501433.html?pmrm=ems-cart-relevant-emsch",
      prod_image:
        "https://img.gkbcdn.com/p/2021-01-20/rg351p-anbernic-retro-game-console-black-1611123134436._w280_.jpg",
      prod_title:
        "ANBERNIC RG351P 64GB Retro Game Console RK3326 Open Source 3.5 inch IPS Screen 10000 Games, Black",
      price: 6626.8,
    },
    {
      id: 22,
      "prod-link":
        "https://www.geekbuying.com/item/Kugoo-Kirin-G3-Electric-Scooter-1200W-Motor-52V-18AH-Battery-Black-473290.html?pmrm=ems-cart-relevant-emsch",
      prod_image:
        "https://img.gkbcdn.com/p/2021-12-27/kugookirin-g3-electric-scooter-1200w-motor-52v-18ah-battery-217364-1640589906322._w280_.jpg",
      prod_title:
        "KugooKirin G3 Adventurers Electric Scooter 10.5 Inch 1200W Rear Motor 52V 18Ah Lithium battery Max Speed 50KM/H Touchable Display Control Panel TPU Suspension System IPX4 - Black",
      price: 77181.83,
    },
    {
      id: 23,
      "prod-link":
        "https://www.geekbuying.com/item/Powkiddy-V90-64GB-Flip-Retro-Game-Console-Black-517349.html?pmrm=ems-cart-relevant-emsch",
      prod_image:
        "https://img.gkbcdn.com/p/2022-03-09/Powkiddy-V90-Flip-Game-Pocket-Console-Black-497449-0._w280_.jpg",
      prod_title:
        "Powkiddy V90 64GB Flip Retro Game Console, 3 Inch IPS Screen, Open Source for Linux, Compatible with Flash OS, GB GBC MD FC SFC GG MS WS NGP PCE FBA PS 16 Simulators, Black",
      price: 3354.93,
    },
    {
      id: 24,
      "prod-link":
        "https://www.geekbuying.com/item/Tronsmart-Element-Mega-Pro-60W-Bluetooth-5-0-Speaker-426469.html?pmrm=ems-cart-relevant-emsch",
      prod_image:
        "https://img.gkbcdn.com/p/2020-10-14/tronsmart-element-mega-pro-60w-bluetooth-5-0-speaker-1602637495048._w280_.jpg",
      prod_title:
        "Tronsmart Element Mega Pro 60W Bluetooth 5.0 Speaker SoundPulse IPX5 Voice Assistant NFC TWS Pairing",
      price: 5452.28,
    },
  ];

  return (
    <div>
      {/* Blue banner top */}
      <CommonHeader/>
      {/* Product Name & Detail */}

      <Box id="product-display">
        <Text>Product Name & Detail</Text>
        <br />
        <Box id="product-tab">
          <Box>Product Name & Detail</Box>
          <Box>Unit Price</Box>
          <Box>Quantity</Box>
          <Box>Total</Box>
          <Box>Operation</Box>
        </Box>
        <Box className="cart_summary">
          {/* Mapping the Cart Data */}
          <CartItem />
          {/* <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem /> */}
        </Box>
        <Box paddingLeft={"1%"} marginBottom={"5px"} marginTop={"5px"} paddingRight={"5%"} height={"50px"} width="100%" display={"flex"} justifyContent={"space-between"} >
          <Box width={"12%"} alignItems="center" justifyContent={"space-around"} display={"flex"}>
            <input type="checkbox" />
            <Text fontWeight={"bold"}>Select All</Text>
          </Box>
          <Box width={"20%"} alignItems="center" justifyContent={"space-around"} display={"flex"}>
            <Text  fontWeight={"bold"}>Your SubTotal: </Text>
            <Text fontWeight={"bold"} color={"orangeRed"}> $ 9999</Text>
          </Box>
        </Box>
        {/*  */}
        <Box id="cont-shop">
          <Link to={"/"} id="/">
            
            <Text  fontSize={"lg"} marginLeft={"10px"}>{"Continue Shopping  > "}</Text>
          </Link>
          <Box>          
            <Text color={"gray"} fontSize={"md"} textAlign={"center"}>{`You choosed {count} item(s)`}</Text>
          </Box>
          <Box>
            
            <Text fontSize={"30px"} paddingBottom="10px" paddingRight={"10px"} textAlign={"center"}>Total : ₹ 0.00</Text>
          </Box>
          <Box>
            <Box id="button-div">
              <Button id="payment-buttons">
                <img
                  id="paypal"
                  src="https://www.blumenthalarts.org/assets/img/paypal-logo-26b71255bc.png"
                  alt=""
                />
              </Button>
              <Button id="payment-buttons">
                <img
                  id="paypal"
                  src="https://pairroxz.com/blog/wp-content/uploads/2020/08/PayPal.png"
                  alt=""
                />
                <Text marginLeft={"5px"} fontSize={"sm"}>
                  Pay Later
                </Text>
              </Button>
              <Link to="/order">
              <Button id="checkout-button">Proceed to checkout</Button>
              </Link>
            </Box>
            <Box>Two ways easy to pay</Box>
            <Box id="easy-pay">
              <Text>
                $10 off $200 when paying with PayPal or credit/debit card
              </Text>
            </Box>
          </Box>
        </Box>
        {/* Relevant Items */}
        <br />
        <br />
        <Box>
          <Text id="relevant_head">More Relavent Items to consider</Text>
          <br />
          <Box className="carousel-wrapper">
            <Carousel pagination={false} breakPoints={breakPoints}>
              {CarouselData.map((item) => (
                <Box key={item.id}>
                  <CarouselItem
                    id={item.id}
                    image={item.prod_image}
                    name={item.prod_title}
                    price={` ₹ ${item.price}`}
                  />
                </Box>
              ))}
            </Carousel>
          </Box>
        </Box>
      </Box>
      <Box bgColor={"blue.50"} paddingTop={"5"}>
        <img
          id="payment-partners"
          src="https://content1.geekbuying.com/V1.4/en/images/shopcart_footicon.png"
          alt=""
        />
        <Text fontSize={"sm"} textAlign={"center"}>
          © 2012-2022 Geekbuying.com. All rights reserved.
        </Text>
        <br />
      </Box>
    </div>
  );
};

export default Cart_page;
