import axios from "axios";
import { useEffect, useState } from "react";
import { normalizeError } from "../../utils/normalizeError";
import { API_URL } from "../../utils/constant";
import { createToast } from "../../utils/createToast";

export default function useReset() {
  const [isCancelled, setIsCancelled] = useState(false);
  const [errors, setErrors] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [finished, setFinished] = useState(false);

  const reset = async ({ token, password }) => {
    // clean error & setpending
    setErrors(null);
    setIsPending(true);

    // set request config
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    // set request body
    const body = JSON.stringify({ token, password });

    try {
      const res = await axios.post(
        API_URL + "/api/auth/forgot-password/reset",
        body,
        config
      );

      createToast(res.data.msg, "success");
      if (!isCancelled) {
        setErrors(null);
        setIsPending(false);
        setFinished(true);
      }
    } catch (error) {
      console.error(error.message);

      if (!isCancelled) {
        if (error.response) {
          setErrors(normalizeError(error.response.data));
        } else {
          setErrors({ other: error.message });
        }
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    // clean up
    return () => {
      setIsCancelled(true);
    };
  }, []);

  return { reset, errors, isPending, finished };
}
