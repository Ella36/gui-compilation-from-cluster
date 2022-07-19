function clip_data_to_compilation(c) {
    console.log(`clip_data_to_compilation ${c}`)
    return {
      "download": 0,
      "error": 0,
      "url": c.url,
      "created_at": c.created_at,
      "game_id": c.game_id,
      "game": c.game,
      "creator": c.creator,
      "language": c.language,
      "thumbnail_url": c.thumbnail_url,
      "title": c.title,
      "duration": c.duration,
      "view_count": c.view_count,
    }
}


export default class ClipArray {
    constructor() {
        this.clips = [];
        return this
    }

    fill_from_clips(clips_data) {
        let clips = []
        Object.values(clips_data)
            .forEach((clip) => (
                clips.push(clip_data_to_compilation(clip)
                )
            )
            );
        console.log(clips)
        this.clips = clips
        return this
    }

    fill_from_compilation(compilation_data) {
        console.log(`Filling compilation with: ${compilation_data}`)
        for (let i = 0; i < compilation_data.length; i++) {
            this.clips.push(compilation_data[i]);
        }
        console.debug(
            `Filled ClipArray with new total of ${this.clips.length} clips`
        );
        return this
    }

    get amountOfClips() { return this.clips.length };
    get totalDuration() {
        return this.clips.reduce( (prev, curr) => prev + curr.duration, 0)
    }

    get isEmpty() { return this.clips.length <= 0 };


    get csv() {
        return this.clips.map((clip) => clip.url).join(',')
    };

    swap(to, from) {
        const temp = this.clips[to]
        this.clips[to] = this.clips[from]
        this.clips[from] = temp
        return this
    }

    shuffle() {
        this.clips.sort(() => Math.random() - 0.5);
        return this
    }

    removeIndex(index) {
        if (this.isEmpty) {
            console.debug(`The ClipArray is empty!`);
            return
        }
        const removedClip = this.clips.splice(index, 1)[0]
        console.debug(`Removed clip: ${removedClip}`)
        return this
    }

    add(clip) {
        if (/[0-9]+/.test(clip)) {
            this.clips.push(clip);
        }
        return this
    }

    reverse() {
        this.clips.reverse()
        return this
    }

}
