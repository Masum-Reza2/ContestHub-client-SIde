import Cover from "../../Components/Cover"
import Spinner from "../../Components/Spinner"
import useAllContests from "../../Hooks/useAllContests"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


import contestImg from '../../assets/contestImages/contest (2).jpg'
import { useState } from "react";
import AllContestTabItems from "../../Components/AllContestTabItems";

const AllContest = () => {
    const [tabIndex, setTabIndex] = useState(0);

    const { contests, isLoading } = useAllContests()
    const types = contests?.map(type => type?.contestType);
    const pureTypes = [...new Set(types)];

    const categories = pureTypes?.map(item => {
        const itemsWithCategory = contests.filter(singleItem => singleItem?.contestType === item && singleItem?.status === 'approved');
        return itemsWithCategory;
    })

    if (isLoading) return <Spinner />
    return (
        <div className="">
            <Cover img={contestImg} desc={'Welcome to our exciting Contest Hub, where the thrill of competition meets the chance to win fantastic prizes! Dive into a world of challenges and showcase your skills for a shot at victory.'} title={'mega contest'} />

            <div className="pt-5 text-center">
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        {
                            pureTypes?.map((category, index) => <Tab key={index}>{category}</Tab>)
                        }
                    </TabList>

                    {
                        categories?.map((category, index) => <TabPanel key={index}>
                            <AllContestTabItems category={category} />
                        </TabPanel>)
                    }
                </Tabs>
            </div>
        </div>
    )
}

export default AllContest