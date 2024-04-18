export function filterData(searchText, restaurants) {
    if (!searchText) return restaurants; // Return all restaurants if searchText is empty
    return restaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase()),
    );
}