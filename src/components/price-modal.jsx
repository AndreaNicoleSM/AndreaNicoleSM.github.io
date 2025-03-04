import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useTranslation, Trans } from "react-i18next";

export default function ScrollDialog() {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <React.Fragment>
      <a onClick={handleClickOpen("paper")}>{t("pricing")}</a>
      {/* <Button onClick={handleClickOpen("body")}>scroll=body</Button> */}
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        sx={{
          "& .MuiDialog-paper": {
            backgroundColor: "rgb(255, 255, 255, 0.75)",
            backdropFilter: "blur(10px)",
            backgroundImage: "none",
            boxShadow: "none",
            transition: "none",
          },
          "& .MuiModal-backdrop": {
            backgroundColor: "rgb(0, 0, 0, 0.2)",
          },
        }}
      >
        <DialogTitle id="scroll-dialog-title">
          {t("service_pricing")}
        </DialogTitle>
        <DialogContent
          dividers={scroll === "paper"}
          id="dialog-content"
          sx={{ scrollbarWidth: "thin", scrollbarColor: "gray transparent" }}
        >
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <div className="">
              <p className="price-item">
                <strong>{t("single_page")}</strong>
              </p>
              <p className="price-item">
                <span>{t("base_price")}</span> {t("price_single")}
              </p>
              <p className="price-item">
                <span>{t("est_turnaround")}</span> {t("turnaround_single")}
              </p>
              <p className="price-item">
                <span>{t("hosting")}</span> {t("hosting_txt")}
              </p>
              <p className="price-item">
                <span>{t("custom_domain")}</span> {t("custom_domain_txt")}
              </p>
            </div>
            <div className="price-item-container">
              <p className="price-item">
                <strong>{t("multi_page")}</strong>
              </p>
              <p className="price-item">
                <span>{t("base_price")}</span> {t("price_multi")}
              </p>
              <p className="price-item">
                <span>{t("est_turnaround")}</span> {t("turnaround_multi")}
              </p>
              <p className="price-item">
                <span>{t("hosting")}</span> {t("hosting_txt")}
              </p>
              <p className="price-item">
                <span>{t("custom_domain")}</span> {t("custom_domain_txt")}
              </p>
              <p className="price-item term">{t("design_reference")}</p>
            </div>
            <hr />
            <h2 className="terms">{t("terms")}</h2>
            <div className="price-item-container terms-container">
              <p className="price-item">{t("terms_1")}</p>
              <p className="price-item term">{t("terms_2")}</p>
              <p className="price-item term">{t("terms_3")}</p>
              <p className="price-item term">{t("terms_4")}</p>
              <p className="price-item term">{t("terms_5")}</p>
              <p className="price-item term">
                <Trans
                  i18nKey="terms_6"
                  components={{
                    2: (
                      <span
                        style={{
                          color: "#1b242f",
                        }}
                      ></span>
                    ),
                  }}
                />
              </p>
              <p className="price-item term">{t("terms_7")}</p>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            sx={{
              color: "#1b242f",
            }}
          >
            {t("close")}
          </Button>
          {/* <Button onClick={handleClose}>Subscribe</Button> */}
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
