import { lazy, Suspense } from "react";
import ModalLoading from "./modal/modalLoading"
const App = lazy(() => import("./App"));

export default function AppLazy(props) {

    return <Suspense fallback={
        <ModalLoading
            show={true}
            loadingStatus={true}
        />}>
        <App />
    </Suspense>
}