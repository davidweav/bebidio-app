import Link from "next/link";
import { useRouter } from "next/router";

export default function drinkDisplay() {
    const router = useRouter();
    const {liquor} = router.query;
    return (
        <div class="drink-display">
            <nav class="nav-bar">
                <ul>
                    <li><a href="./">Home</a></li>
                    <li><a href="../about">About</a></li>
                    <li><a href="../options">Drink Maker</a></li>
                    <li><a href="#">Drink Collection</a></li>
                </ul>
            </nav>

            <h1>Liquor: {liquor}</h1>
        </div>
    )
}
