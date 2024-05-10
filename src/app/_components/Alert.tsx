"use client";

import { useEffect } from "react";
import { Alert as ALERT } from "react-bootstrap";

import { usePathname } from "next/navigation";

import { useAlertService } from "@/app/_services";

export { Alert };

function Alert() {
  const pathname = usePathname();
  const alertService = useAlertService();
  const alert = alertService.alert;

  useEffect(() => {
    // clear alert on location change
    alertService.clear();
    // react-hooks/exhaustive-deps
  }, [pathname]);

  if (!alert) return null;

  return (
    <div
      style={{ position: "fixed", top: "20px", right: "20px", zIndex: 9999 }}
    >
      <ALERT
        show={true}
        variant={alert.type}
        onClose={alertService.clear}
        dismissible
        transition
      >
        {alert.message}
      </ALERT>
    </div>
  );

  // return (
  //   <div className="container">
  //     <div className="m-3">
  //       <div className={`alert alert-dismissible ${alert.type}`}>
  //         {alert.message}
  //         <button
  //           type="button"
  //           className="btn-close"
  //           onClick={alertService.clear}
  //         ></button>
  //       </div>
  //     </div>
  //   </div>
  // );
}
