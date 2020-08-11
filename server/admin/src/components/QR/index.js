import React from "react";
import PageTitle from "../PageTitle";
import { useIntl } from "react-intl";

const QR = () => {
  const { formatMessage } = useIntl();
  return (
    <>
      <PageTitle
        title={formatMessage({
          id: "app.components.LeftMenuLinkContainer.generateQr",
        })}
      />
      <div>Selamlar</div>
    </>
  );
};

export default QR;
