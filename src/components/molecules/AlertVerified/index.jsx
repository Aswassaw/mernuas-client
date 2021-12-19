import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../../../utils/constant";
import { normalizeError } from "../../../utils/normalizeError";
import { createToast } from "../../../utils/createToast";

export default function AlertVerified({ user }) {
  const [isPending, setIsPending] = useState(false);

  const resendEmail = async () => {
    setIsPending(true);

    try {
      const res = await axios.post(
        API_URL + "/api/auth/account-activation/resend"
      );

      createToast(res.data.msg, "success");
      setIsPending(false);
    } catch (error) {
      console.error(error);

      if (error.response) {
        createToast(normalizeError(error.response.data).other, "error");
      } else {
        createToast(error.message);
      }
      setIsPending(false);
    }
  };

  return (
    <>
      {!user.verified && (
        <div className="alert alert-danger">
          Your account has not been verified, please check your email.{" "}
          {isPending && (
            <span>
              <div className="spinner-border spinner-border-sm" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>{" "}
              Processing, Please wait.
            </span>
          )}
          {!isPending && (
            <span className="btn-link" onClick={resendEmail}>
              Resend email verification.
            </span>
          )}
        </div>
      )}
    </>
  );
}
