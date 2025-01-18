import { Dashboard } from "@/components/app-dashboard";

import { DashboardWidgets } from "./components/dashboard-widgets";
import { DashboardSales } from "./components/dahsboard-sales";
import { DashboardTraffic } from "./components/dashboard-traffic";
import { DashboardProducts } from "./components/dashboard-products";
import { DashboardOrders } from "./components/dashboard-orders";

export default function Page() {
    return (
        <Dashboard
            className="container mx-auto sm:pt-16"
            metadata={{ title: 'Overview' }}
        >
            <DashboardWidgets className="md:grid-cols-2 lg:grid-cols-4 gap-5" />
            <div className="grid lg:grid-cols-3 auto-rows-min gap-5">
                <DashboardSales className="lg:col-span-2" />
                <DashboardTraffic />
                <DashboardProducts />
                <DashboardOrders className="lg:col-span-2" />
            </div>
        </Dashboard>
    )
}