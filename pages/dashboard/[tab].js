import React from "react";


import { StandardLayout } from "layout";
import { Typography, Spin } from "antd";
import { paths } from "const/dashboard";

import dynamic from "next/dynamic";

const Loader = () => <div>Loading...</div>;

const DashboardMain = dynamic(() => 
  import("components/Pages/Dashboard/Main"), 
  {
    loading: Loader,
  }
);
const DashboardVetrina = dynamic(() => 
  import("components/Pages/Dashboard/Vetrina"),
  {
    loading: Loader,
  }
);
const DashboardImmobili = dynamic(() => 
  import("components/Pages/Dashboard/Items"),
  {
    loading: Loader,
  }
);

const { Text } = Typography;

export function getStaticPaths() {
  return {
    paths: paths.map((e) => `/dashboard${e.path}`),
    fallback: false,
  };
}

export function getStaticProps(ctx) {
  let { params } = ctx;
  let { tab } = params;
  return {
    props: { tab },
  };
}

export default function Dashboard({ tab }) {
  return (
    // <AgenziaPage>
      <StandardLayout>
        {tab === "main" && <DashboardMain />}
        {tab === "vetrina" && <DashboardVetrina />}
        {tab === "immobili" && <DashboardImmobili />}
        {tab === "staff" && <DashboardStaff />}
      </StandardLayout>
    // </AgenziaPage>

  );
}
