export default function Button({classes, label}: {classes: string, label: string}) {
    return <button type="submit" className={classes}>{label}</button>
}
