import { Link } from 'react-router-dom'

export function Navigation() {
    return (
    <div>
        <Link to="/store-new">New Store</Link>
        <Link to="/stores">Store List</Link>
    </div>
    )
}