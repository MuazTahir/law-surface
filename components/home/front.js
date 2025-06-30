import LeadingLawFirms from "../leadingLawFirms/page";
import LawSurfaceFeatures from "@/components/LawSurfaceFeatures/page";
import LawFirmOfficeOrganized from "@/components/LawFirmOfficeOrganized/page";
import OrganizedAndIntegratedManagement from "@/components/OrganizedAndIntegratedManagement/page";
import Transition from "@/components/Transition/page";
import LawFirms from "@/components/LawFirms/page";

export default function LawSurface({router}) {
  return (
    <div>
      <LeadingLawFirms router={router}></LeadingLawFirms>
      <LawSurfaceFeatures></LawSurfaceFeatures>
      <LawFirmOfficeOrganized></LawFirmOfficeOrganized>
      <OrganizedAndIntegratedManagement></OrganizedAndIntegratedManagement>
      <Transition></Transition>
      <LawFirms></LawFirms>
     
    </div>
  );
}
