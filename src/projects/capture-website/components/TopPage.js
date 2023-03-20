// This component navigates the user to the top of the the page when theyu navigate to another part of the site
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function TopPage() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  }, [pathname]);
  return null;
}

export default TopPage;
