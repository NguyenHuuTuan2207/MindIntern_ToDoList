import { useState, useEffect, useCallback, useMemo } from "react";
import { Button } from "react-native"
function DataFetcher() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [postId, setPostId] = useState(1);

    // ... Hãy viết useEffect, useCallback, useMemo của bạn vào đây ...

    // Phần hiển thị
    if (isLoading) return <p>Đang tải dữ liệu...</p>;

    return (
        <div>
            <button onClick={() => setData(data)}></button>
        </div >
    );
}