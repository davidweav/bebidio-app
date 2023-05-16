import Link from "next/link";
import { useRouter } from "next/router";

export default function drinkDisplay() {
    const router = useRouter();
    const {liquor} = router.query;
    return (
        <div>
            <Link href="../">Go Back</Link>
            <h1>Liquor: {liquor}</h1>
        </div>
    )
}
