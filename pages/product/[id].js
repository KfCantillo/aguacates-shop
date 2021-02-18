import { useRouter } from "next/router";

const ProductItems = () => {
    const router = useRouter();
    return (
        <div>
            Pagina de ProductItems perros --> {router.query.id}
        </div>
    )
}

export default ProductItems;