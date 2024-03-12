import { useState, useCallback, useEffect } from "react";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import PlusIcon from "./assets/box.svg";
import Logo from "./assets/Logo.svg";
import { DebitCardDetails } from "./debit-cards-details";

import "./cards-page.css";
import TabPanelLayout from "./tab-panel-layout";
import { createCard, freezeCard, getDebitCards } from "./api/api";
import { DebitCardDetailsType } from "./types/types";

export default function CardsPage() {
  const [value, setValue] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);
  const [cardName, setCardName] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [debitCardData, setDebitCardData] = useState<
    DebitCardDetailsType[] | []
  >([]);

  const getCards = () => {
    getDebitCards().then((data) => {
      setDebitCardData(data);
    });
  };

  useEffect(() => {
    getCards();
  }, []);

  const freezeCardHandler = (id: number) => {
    freezeCard(debitCardData[id].id)
      .then((res) => {
        if (res) {
          getDebitCards().then((data) => {
            setDebitCardData(data);
          });
        }
      })
      .catch(() => {
        console.log("Error encountered while peforming operation");
      });
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleOpen = (): void => setOpen(true);

  const handleClose = (): void => {
    setError("");
    setCardName("");
    setOpen(false);
  };

  const createCardHandler = useCallback(() => {
    if (cardName === "") {
      setError("Please enter card name.");
      return;
    }
    createCard(cardName)
      .then(() => {
        alert("Card created successfully");
        getCards();
      })
      .catch((e) => {
        console.log("Error while creating card");
      });
    handleClose();
  }, [cardName]);

  return (
    <div data-testid="cards-page">
      <Box
        sx={(theme) => ({
          width: "100%",
          height: "80%",
          [theme.breakpoints.up("lg")]: {
            width: "90%",
            height: "100%",
          },
        })}
        className="card-page-container lg:pt-16 lg:pl-16 bg-[#0C365A] lg:bg-white sm:text-white"
      >
        <div className="text-left font-light text-md px-4 lg:px-0 lg:text-black pt-2 mb-2 lg:mt-0 lg:mb-2 text-white flex justify-between">
          <p>Available balance</p>
          <img
            src={Logo}
            alt="logo-icon"
            height={100}
            width={100}
            className="block lg:hidden"
          />
        </div>
        <div className="flex justify-between mt-3 mb-2 lg:mt-2 lg:mb-4 w-[95%] px-4 lg:px-0">
          <div>
            <button className="bg-[#01D167] text-white px-4 rounded-[5px] mr-2">
              <span className="font-xs">S$</span>
            </button>
            <span className="font-bold text-xl text-white lg:text-black">
              3,000
            </span>
          </div>
          <button
            className="bg-[#325BAF] text-white px-4 rounded-[5px] py-0.5 flex justify-center items-center"
            onClick={handleOpen}
          >
            <img src={PlusIcon} alt="Add new card" className="mr-2" />
            New card
          </button>
        </div>
        <Box
          sx={(theme) => ({
            p: 2,
            [theme.breakpoints.up("lg")]: {
              p: 0,
            },
          })}
        >
          <Tabs
            value={value}
            indicatorColor="secondary"
            onChange={handleChange}
            aria-label="cards-page-tabs"
          >
            <Tab
              label="My debit cards"
              sx={(theme) => ({
                color: "white",
                [theme.breakpoints.up("lg")]: {
                  color: "black",
                },
              })}
            />
            <Tab
              label="All company cards"
              sx={(theme) => ({
                color: "white",
                [theme.breakpoints.up("lg")]: {
                  color: "black",
                },
              })}
            />
          </Tabs>
        </Box>
        <TabPanelLayout value={value} index={0}>
          <DebitCardDetails
            card={debitCardData}
            freezeCard={freezeCardHandler}
          />
        </TabPanelLayout>
        <TabPanelLayout value={value} index={1}>
          {/* All company cards */}
        </TabPanelLayout>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <div data-testid="add-new-card-modal">
            <h1 className="text-[25px] font-bold">Create new card</h1>
            <div>
              <input
                required
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
                placeholder="Enter name on the card"
                className="p-2 w-full mt-4 border-2 b-gray-200 rounded-[5px]"
              />
              <p className="text-red-600 text-md mt-2">{error}</p>
            </div>
            <div className="flex justify-end mt-4">
              <button
                className="bg-[#01D167] text-white px-3 py-1 rounded-xl"
                onClick={createCardHandler}
              >
                Submit
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
