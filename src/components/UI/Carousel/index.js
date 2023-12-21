import { getProducts } from '@/services/api/product.api';
import Link from 'next/link';

const Index = ({ current_page }) => {

    const products = await getProducts();

    return (
        <div class="grid grid-cols-4 gap-4">
            
        </div>
    );
}

export default Index;