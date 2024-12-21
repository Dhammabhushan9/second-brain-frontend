import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

export function useFetchContent() {
  const [content, setContent] = useState([]);
 

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("No token found");

        const response = await axios.get(`${BACKEND_URL}/api/v1/content`, {
          headers: { token },
        });

        setContent(response.data.content || []);
        setError(null);
      } catch (err) {
        setError(err.message || "An error occurred while fetching content.");
      } finally {
        setLoading(false);
      }
    };

    fetchContent();

    // Cleanup function (if needed in future for cancellation)
    return () => {
      // Cancel ongoing requests here if using an axios CancelToken
    };
  }, []);

  return { content  };
}
