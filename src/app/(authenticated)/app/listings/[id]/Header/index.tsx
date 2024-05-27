import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { Container } from "react-bootstrap";
import { Tabs, Tab } from "react-bootstrap";
import { Tabs as TabsT, URLs, getTab } from "../utils";
import { SyntheticEvent, useEffect, useState } from "react";

const Header = async ({ id }: any) => {
  const pathname = usePathname();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<string>(getTab(pathname));

  useEffect(() => {
    setActiveTab(getTab(pathname));
  }, [pathname]);

  const onTabChange = (newTab: string) => {
    setActiveTab(newTab);
    router.push(`/app/listings/${id}${URLs[newTab]}`);
  };

  const handleTabChange = (newTab: string) => {
    onTabChange(newTab);
  };

  return (
    <div>
      Header
      <Tabs
        id="controlled-tab-example"
        activeKey={activeTab}
        onSelect={(k) => handleTabChange(k!)}
        className="mb-3"
      >
        <Tab title="Overview" eventKey={"Overview"} />
        <Tab title={"Access & Issues"} eventKey={"AccessIssues"} />
        <Tab title="Access" eventKey={"Access"} />
        <Tab title={"Offers"} eventKey={"Offers"} />
        <Tab title="Services" eventKey={"Services"} />
        <Tab title="Listing Details" eventKey={"ListingDetails"} />
        <Tab title="Property Details" eventKey={"PropertyDetails"} />
        <Tab title="Listing Engagement" eventKey={"ListingEngagement"} />
        <Tab title="Commissions & Expenses" eventKey={"Commissions"} />
      </Tabs>
    </div>
  );
};

export default Header;
