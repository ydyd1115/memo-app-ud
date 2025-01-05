import { View, Text, StyleSheet, type TextStyle}  from 'react-native';

interface Props{
    children:string,
    bang?:boolean,
    style?:TextStyle,
}

export const Hello = (props : Props):JSX.Element =>{
    // const children = props.children;
    const { children, bang, style } = props;
    
    return(
        <View>

            {/* styles.textはこのコンポーネント内で定義するスタイル
                styleはPropsから受け取るスタイル
                ※１つのstyleプロパティに配列で設定する点に注意 */}
            <Text style={[styles.text, style]}>

                {/* bangはnullableのため === で明示的に比較する */}
                Hello {children}{bang === true ? "!" : ""}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        color:'#FFF',
        backgroundColor:'blue',
        fontSize:40,
        fontWeight:'bold',
        padding:16
    }
});