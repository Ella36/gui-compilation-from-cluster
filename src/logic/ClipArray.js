export default class ClipArray {
    constructor(){
        this.clips = [];
        return this
    }

    fill_from_compilation(clips_data) {
        console.log(`Filling compilation with: ${clips_data}`)
        for (let i=0; i<clips_data.length; i++){
            this.clips.push(clips_data[i]);
        }
        console.debug(
            `Filled ClipArray with new total of ${this.clips.length} clips`
        );
        return this
    }

    get amountOfClips() {return this.clips.length};

    get isEmpty() {return this.clips.length <= 0};


    get csv() {
        return this.clips.map((clip) => clip.url).join(',')
    };

    swap(to, from){
        const temp = this.clips[to]
        this.clips[to] = this.clips[from]
        this.clips[from] = temp
        return this
    }

    shuffle() {
        this.clips.sort( () => Math.random() - 0.5 );
        return this
    }

    removeIndex(index) {
        if (this.isEmpty){
            console.debug(`The ClipArray is empty!`);
            return
        }
        const removedClip = this.clips.splice(index,1)[0]
        console.debug(`Removed clip: ${removedClip}`)
        return this
    }

    add(clip) {
        if (/[0-9]+/.test(clip)){
            this.clips.push(clip);
        }
        return this
    }

    reverse() {
        this.clips.reverse()
        return this
    }

}
