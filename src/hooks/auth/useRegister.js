import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { authUser } from "../../redux/actions/auth";
import { LOGIN_FAILED, LOGIN_SUCCESS } from "../../redux/actions/types";
import { normalizeError } from "../../utils/normalizeError";
import { API_URL } from "../../utils/constant";

export default function useRegister() {
  const [isCancelled, setIsCancelled] = useState(false);
  const [errors, setErrors] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [finished, setFinished] = useState(false);
  const dispatch = useDispatch();

  const register = async ({ name, email, password }) => {
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
    const body = JSON.stringify({ name, email, password });

    try {
      // registering user
      const res = await axios.post(
        API_URL + "/api/auth/register",
        body,
        config
      );

      // if register success
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data.token,
      });
      dispatch(authUser());

      if (!isCancelled) {
        setErrors(null);
        setIsPending(false);
        setFinished(true);
      }
    } catch (error) {
      console.error(error.message);

      // if register failed
      dispatch({
        type: LOGIN_FAILED,
      });
      dispatch(authUser());

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

  return { register, errors, isPending, finished };
}
