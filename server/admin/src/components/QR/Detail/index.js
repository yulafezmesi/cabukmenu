import React from "react";
import PageTitle from "../../PageTitle";
import { useIntl } from "react-intl";

const QRDetail = ({
  match: {
    params: { id },
  },
}) => {
  const { formatMessage } = useIntl();

  return (
    <>
      <PageTitle
        title={formatMessage({
          id: "app.components.LeftMenuLinkContainer.generateQr",
        })}
      />
      <div>This is Detail {id}</div>
    </>
  );
};

export default QRDetail;
