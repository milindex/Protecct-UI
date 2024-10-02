import styles from "./page.module.scss";
import Banner from "@/app/_components/Common/Banner/Banner";
import SectionAbout from "./parts/SectionAbout/SectionAbout";
import SectionServices from "./parts/SectionServices/SectionServices";
import SectionBenifits from "./parts/SectionBenifits/SectionBenifits";
import SectionProcess from "./parts/SectionProcess/SectionProcess";
import SectionCustomers from "./parts/SectionCustomers/SectionCustomers";
import SectionCustomerSupport from "./parts/SectionCustomerSupport/SectionCustomerSupport";

const Home = () => {
	return (
		<div className="container">
			<Banner type="home" />
			<SectionAbout />
			<SectionBenifits />
			<SectionServices />
			<SectionProcess />
			<SectionCustomers />
			<SectionCustomerSupport />
		</div>
	);
};

export default Home;
