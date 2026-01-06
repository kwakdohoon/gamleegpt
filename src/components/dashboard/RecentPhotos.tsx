import { Camera, Clock } from "lucide-react";

interface Photo {
  id: string;
  url: string;
  caption: string;
  location: string;
  time: string;
}

const photos: Photo[] = [
  { 
    id: "1", 
    url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=200&h=200&fit=crop",
    caption: "철근 배근 상태",
    location: "A동 3층",
    time: "10:30"
  },
  { 
    id: "2", 
    url: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=200&h=200&fit=crop",
    caption: "거푸집 설치 완료",
    location: "B동 2층",
    time: "09:15"
  },
  { 
    id: "3", 
    url: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=200&h=200&fit=crop",
    caption: "콘크리트 타설 중",
    location: "C동 1층",
    time: "08:45"
  },
  { 
    id: "4", 
    url: "https://images.unsplash.com/photo-1587582345426-bf07b96e9a36?w=200&h=200&fit=crop",
    caption: "안전시설 점검",
    location: "현장 외곽",
    time: "08:00"
  },
];

export function RecentPhotos() {
  return (
    <div className="bg-card rounded-lg border border-border shadow-sm">
      <div className="px-5 py-4 border-b border-border flex items-center justify-between">
        <h3 className="font-semibold text-foreground">최근 현장 사진</h3>
        <button className="text-sm text-info hover:underline font-medium flex items-center gap-1">
          <Camera className="w-4 h-4" />
          사진 업로드
        </button>
      </div>
      <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-3">
        {photos.map((photo) => (
          <div key={photo.id} className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer">
            <img 
              src={photo.url} 
              alt={photo.caption}
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-0 left-0 right-0 p-2">
                <p className="text-xs text-white font-medium truncate">{photo.caption}</p>
                <div className="flex items-center gap-1 text-white/70">
                  <Clock className="w-3 h-3" />
                  <span className="text-xs">{photo.time} · {photo.location}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
